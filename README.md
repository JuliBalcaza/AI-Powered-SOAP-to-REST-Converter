# Project SOAP to REST Migration Tool

## Problem Statement
In the context of a project migration in the field of software development, the development of a tool capable of identifying the SOAP protocols present in the code and offering suggestions to adapt its migration to REST is required.

## Solution Overview

This tool uses artificial intelligence to identify and adapt the SOAP protocols found in the project files, thus enabling a more efficient and accurate migration towards the REST paradigm.

This problem is addressed through a JavaScript script that analyzes project files for SOAP protocols and provides suggestions for transforming them into REST requests. Below is a summary of the process:

1. **File Reading**: The script reads project files specified in the provided path.

2. **SOAP Protocol Identification**: It scans the content of each file for SOAP protocols.

3. **Suggestion Generation**: Using the OpenAI API, suggestions are generated to transform identified SOAP protocols into REST requests. These suggestions are based on an advanced language model (GPT-4) and are written as comments in the code.

4. **Results Writing**: The generated suggestions are written to an output file, along with details of the SOAP protocols found and their relative location within the project.

## Expected Output

After executing the script, it is expected that a file will be generated for each processed input file. Each output file will contain:

- A list of SOAP protocols found, along with their relative location in the project.
- For each identified SOAP protocol, an example suggestion for transforming it into a REST request, written in JavaScript and provided as a comment in the code.

## Internal Workflow

The JavaScript script uses the `fs` library for file manipulation and the `OpenAI` library to interact with the OpenAI API. Below is a description of the internal workflow of the script:

1. **Initial Setup**: Environment variables are configured, and the OpenAI client is initialized with the provided API key.

2. **File Processing**: The list of files in the specified path is obtained and iterated over.

3. **File Analysis**: For each file, it is checked if it's a valid file and its content is read to search for SOAP protocols.

4. **Suggestion Generation**: The OpenAI API is used to generate transformation suggestions from SOAP to REST, providing contextual information about the project's context and transformation requirements.

5. **Results Writing**: The generated suggestions are written to specific output files, along with details of the SOAP protocols found.

## Usage

To use this tool, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables, including the API key for OpenAI.
4. Configure the folder path containing project files in the `.env` file.
5. Run the script using `node script.js`.

## Contributions

Contributions are welcome! If you have ideas for improvements or encounter any issues, please open an issue or submit a pull request.

## License

This project was developed by Julieta Balcaza.

