import React from "react";
import { FileInput, FormInput, TextAreaInput } from "../FormInputs";
import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export type GuildInfoFormData = {
  name: string;
  description: string;
  photo: string;
};

export type GuildInfoFormProps = {
  defaults?: GuildInfoFormData;
  onSubmit: (data: GuildInfoFormData) => void;
};

const GuildInfoForm: React.FC<GuildInfoFormProps> = ({
  defaults,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<GuildInfoFormData>({ defaultValues: defaults });

  return (
    <>
      <FileInput name="photo" control={control} />
      <FormInput
        label="Name"
        inputGroupProps={{ size: "lg" }}
        error={errors?.name?.message}
        helperText="Public facing name"
        mt={4}
        inputProps={{
          placeholder: "Name",
          ...register("name", {
            required: {
              value: true,
              message: "Name is required",
            },
          }),
        }}
      />
      <TextAreaInput
        label="Description"
        error={errors?.name?.message}
        helperText="Public facing name"
        mt={4}
        textAreaProps={{
          placeholder: "Description",
          ...register("description"),
        }}
      />
      <Button colorScheme="blue" onClick={handleSubmit(onSubmit)}>
        Save Info
      </Button>
    </>
  );
};

export default GuildInfoForm;
