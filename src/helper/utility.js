export const copyToClipboard = (str) => {
  const newTextArea = document.createElement("textarea");
  newTextArea.value = str;
  document.body.appendChild(newTextArea);
  newTextArea.select();
  navigator.clipboard.writeText(newTextArea.value);
  document.body.removeChild(newTextArea);
};
