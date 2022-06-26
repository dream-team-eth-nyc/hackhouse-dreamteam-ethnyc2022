import React, { ReactNode } from "react";
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";

type FormInputProps = {
  label?: string;
  error?: string;
  helperText?: string;
  inputGroupProps?: InputGroupProps;
  leftElement?: ReactNode;
  rightItem?: ReactNode;
  inputProps: InputProps;
} & FormControlProps;

const FormInput: React.FC<FormInputProps> = ({
  label,
  helperText,
  error,
  inputProps,
  inputGroupProps,
  leftElement,
  rightItem,
  ...props
}) => (
  <FormControl isInvalid={Boolean(error)} {...props}>
    <FormLabel>{label}</FormLabel>
    <HStack spacing={2}>
      <InputGroup {...inputGroupProps}>
        {Boolean(leftElement) && (
          <InputLeftElement>{leftElement}</InputLeftElement>
        )}
        <Input {...inputProps} />
      </InputGroup>
      {rightItem}
    </HStack>
    {Boolean(helperText) && (
      <FormHelperText textAlign="left">{helperText}</FormHelperText>
    )}
    {Boolean(error) && <FormErrorMessage>{error}</FormErrorMessage>}
  </FormControl>
);

export default FormInput;
