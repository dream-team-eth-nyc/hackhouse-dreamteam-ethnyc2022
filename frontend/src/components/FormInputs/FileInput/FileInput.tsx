import React, { ChangeEvent, useState } from "react";
import {
  Avatar,
  Flex,
  FormControl,
  FormErrorMessage,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Control, useController } from "react-hook-form";
import axios from "axios";

type FileInputProps = {
  control?: Control<any>;
  name: string;
  required?: boolean;
};

const FileInput: React.FC<FileInputProps> = ({ control, name, required }) => {
  const toast = useToast();

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    control,
    name,
    rules: {
      required: required ? "Photo required!" : undefined,
    },
  });

  const [loading, setLoading] = useState(false);

  const handlePick = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    try {
      const file = event?.target?.files?.[0];
      const formData = new FormData();
      formData.append("file", file as File);

      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
          pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const url = `ipfs://${resFile.data.IpfsHash}`;
      onChange(url);
    } catch (e: any) {
      toast({
        title: e.toString(),
        status: "error",
      });
    }
    setLoading(false);
  };

  return (
    <FormControl isInvalid={Boolean(error)} alignItems="center">
      <Flex direction="column" alignItems="center">
        {loading ? (
          <Spinner />
        ) : (
          <Avatar
            size="lg"
            mx="auto"
            src={
              value?.replace("ipfs://", "https://ipfs.io/ipfs/") ?? undefined
            }
          />
        )}

        <Text
          textStyle="label2"
          fontSize="xs"
          color="primary.500"
          as="label"
          htmlFor="file-upload"
          cursor="pointer"
          mt={1}
        >
          Upload Photo
          <input
            type="file"
            id="file-upload"
            onChange={handlePick}
            accept="image/*"
            style={{ display: "none" }}
          />
        </Text>
        {error && (
          <FormErrorMessage textAlign="center">
            {error.message}
          </FormErrorMessage>
        )}
      </Flex>
    </FormControl>
  );
};

export default FileInput;
