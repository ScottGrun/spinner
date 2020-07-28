const cliSpinner = () => {
  const aniSequence = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "];
  aniSequence.forEach((frame, idx) => {
    setTimeout(() => {
      process.stdout.write(frame);
    }, 100 * idx);
  });
};

cliSpinner();