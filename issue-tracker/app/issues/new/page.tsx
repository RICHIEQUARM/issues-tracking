"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-4">
      <TextField.Root placeholder="Title"></TextField.Root>
      <TextArea className="mt-5" placeholder="Description"></TextArea>
      <Button>Submit New Issues</Button>
    </div>
  );
};

export default NewIssuePage;
