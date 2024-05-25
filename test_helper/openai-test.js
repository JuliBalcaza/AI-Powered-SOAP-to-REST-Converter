import { promises as fs } from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.API_KEY
});

const folderPath = process.env.FOLDER_PATH

async function processFiles() {
  try {
    const files = await fs.readdir(folderPath);

    for (const file of files) {
      const filePath = path.join(folderPath, file);

      const fileStats = await fs.stat(filePath);
      if (fileStats.isFile()) {
        const fileContent = await fs.readFile(filePath, 'utf8');

        const completion = await openai.chat.completions.create({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are a software quality engineer with 20 years of working experience. You must evaluate files containing SOAP protocols to transform them into REST.'
            },
            {
              role: 'user',
              content: `You must write a list, as a code comment, of the SOAP protocols found with their relative location and add, in javascript, for each SOAP protocol found, an example suggestion for transforming that SOAP protocol into a REST request and all the explanations written as code comments\n${fileContent}`
            }
          ]
        });

        const convertToRest = completion.choices[0].message.content;
        console.log(`Content of ${file}:`);
        console.log(convertToRest);

        const outputFilePath = `/Users/julietabalcaza/Documents/JLB/Testing/Hackathon/hackathon_project/test_results/${file}`;

        await fs.writeFile(outputFilePath, convertToRest, 'utf8');

        console.log(`Results of ${file} have been saved to ${outputFilePath}`);
      }
    }
  } catch (error) {
    console.error('Error reading files or OpenAI API:', error);
  }
}

processFiles();