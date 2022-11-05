const redomJokes = [
  "Action Center lists important messages about security and maintenance settings that need your attention. Red items in Action Center are labeled Important, and indicate significant issues that should be addressed soon, such as an outdated antivirus program that needs updating. Yell",
  "You can quickly see whether there are any new messages in Action Center by placing your mouse over the Action Center icon  in the notification area on the taskbar. Click the icon to view more detail, and click a message to address the issue. Or, open Action Center to view the message in its entirety",
  "If you’re having a problem with your computer, check Action Center to see if the issue has been identified. If it hasn’t, you can also find helpful links to troubleshooters and other tools that can help fix problems",
  "If your computer is part of a network at an organization such as a school, government agency, or business, your organization s system administrator might have disabled or even removed certain settings by using Group Policy. Group Policy is a feature of Windows that lets system administrators m",
  "If your computer isnt part of a network, a user with administrator privileges might have modified Group Policy on your computer to remove access to the settings. In this case, contact the administrator to modify the settings youd like to change.",
  "If your computer is connected to a network, network policy settings might prevent you from completing these steps.",
];

const element = (element) => {
  return document.querySelector(element);
};
// const btns = element(".mybtn");
// const jokes = element(".jokes");
const btns = document.querySelector(".mybtn");
const jokes = document.querySelector(".jokes");
btns.addEventListener("click", () => {
  const random = Math.floor(Math.random() * redomJokes.length);
  jokes.innerHTML = redomJokes[random];
  jokes.style.color = "black";
});
