const truncateText = (text?: string) =>
  text
    ? text.length >= 6
      ? `${text.substring(0, 4)}...${text.substring(text.length - 3)}`
      : text
    : null;

export default truncateText;
