"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-4">
      <TextField.Root placeholder="Title"></TextField.Root>
      <SimpleMDE className="mt-5" placeholder="Description"></SimpleMDE>
      <Button>Submit New Issues</Button>
    </div>
  );
};

export default NewIssuePage;
