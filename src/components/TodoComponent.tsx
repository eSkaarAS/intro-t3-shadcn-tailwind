import { type Todo } from "@prisma/client";
import { Checkbox } from "./ui/checkbox";
import { api } from "@/utils/api";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { Typewriter } from "./typewriter";

export default function TodoComponent({ todo }: { todo: Todo }) {
  const utils = api.useUtils();

  const { mutateAsync: toggleTodo } = api.todo.update.useMutation({
    onSuccess: () => void utils.todo.findAll.invalidate(),
  });
  const { mutateAsync: deleteTodo } = api.todo.delete.useMutation({
    onSuccess: () => void utils.todo.findAll.invalidate(),
  });

  return (
    <div className="flex w-full items-center gap-2">
      <Checkbox
        id={todo.id}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        defaultChecked={todo.completed}
        onCheckedChange={() =>
          void toggleTodo({
            id: todo.id,
            completed: !todo.completed,
          })
        }
      />
      <label
        htmlFor={todo.id}
        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${todo.completed ? "line-through opacity-50" : ""}`}
      >
        <Typewriter baseText={todo.description} delay={0.2} texts={[]} />
      </label>
      <Button
        className="ml-auto"
        variant="ghost"
        size="icon"
        onClick={() => void deleteTodo({ id: todo.id })}
      >
        <Trash2 className="text-red-500" />
      </Button>
    </div>
  );
}
