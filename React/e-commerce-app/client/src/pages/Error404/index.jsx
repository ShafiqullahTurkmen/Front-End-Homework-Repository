import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import React from "react";

export default function Error404() {
  return (
    <div>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Error 404</AlertTitle>
        <AlertDescription>
          This page is not found.
        </AlertDescription>
      </Alert>
    </div>
  );
}
