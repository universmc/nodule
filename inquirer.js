import inquirer from 'inquirer';

const questions = [
  {
    type: 'input',
    name: 'hostname',
    message: 'Enter the hostname for your server:',
  },
  {
    type: 'list',
    name: 'environment',
    message: 'Choose the target environment:',
    choices: ['option','development', 'staging', 'production'],
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(`
      Configuration:
      - Hostname: ${answers.hostname}
      - Environment: ${answers.environment}
    `);

    // Proceed with your provisioning, deployment, or other tasks based on the answers.
  });
