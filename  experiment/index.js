let textCopy = document.getElementById("text-copy");

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(textCopy.innerText);
    console.log(`content Copied to Clipboard`);
  } catch (err) {
    console.log(`failed to copy`, err);
  }
};

// copyToCLip();
