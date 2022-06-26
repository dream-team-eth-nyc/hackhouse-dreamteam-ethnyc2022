const truncateText = (text: string) =>
  text.length >= 6
    ? `${text.substring(0, 4)}...${text.substring(text.length - 3)}`
    : text;

export default truncateText;
