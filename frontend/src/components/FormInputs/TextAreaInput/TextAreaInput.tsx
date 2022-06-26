import React from "react";
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";

type TextAreaInputProps = {
  label?: string;
  error?: string;
  helperText?: string;
  textAreaProps: TextareaProps;
} & FormControlProps;

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  label,
  helperText,
  error,
  textAreaProps,
  ...props
}) => (
  <FormControl isInvalid={Boolean(error)} {...props}>
    <FormLabel>{label}</FormLabel>
    <Textarea {...textAreaProps} />
    {Boolean(helperText) && (
      <FormHelperText textAlign="left">{helperText}</FormHelperText>
    )}
    {Boolean(error) && <FormErrorMessage>{error}</FormErrorMessage>}
  </FormControl>
);

export default TextAreaInput;
