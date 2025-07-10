import { Plus, Search, Filter, Clock, User, CheckCircle2, Circle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  assignee: string;
  dueDate: string;
}

const TaskManagerDemo = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Design Homepage",
      description: "Create wireframes and mockups for the new homepage",
      status: "in-progress",
      priority: "high",
      assignee: "John Doe",
      dueDate: "2024-01-15"
    },
    {
      id: 2,
      title: "API Integration",
      description: "Integrate user authentication API",
      status: "todo",
      priority: "medium",
      assignee: "Jane Smith",
      dueDate: "2024-01-20"
    },
    {
      id: 3,
      title: "Bug Fixes",
      description: "Fix reported issues in the dashboard",
      status: "completed",
      priority: "low",
      assignee: "Mike Johnson",
      dueDate: "2024-01-10"
    },
    {
      id: 4,
      title: "User Testing",
      description: "Conduct user testing sessions",
      status: "todo",
      priority: "high",
      assignee: "Sarah Wilson",
      dueDate: "2024-01-25"
    }
  ]);

  const toggleTaskStatus = (id: number) => {
    setTasks(prev => prev.map(task => 
      task.id === id 
        ? { ...task, status: task.status === "completed" ? "todo" : "completed" as const }
        : task
    ));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500";
      case "medium":
        return "text-yellow-500";
      default:
        return "text-green-500";
    }
  };

  const statusColumns = {
    todo: tasks.filter(task => task.status === "todo"),
    "in-progress": tasks.filter(task => task.status === "in-progress"),
    completed: tasks.filter(task => task.status === "completed")
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-primary">TaskFlow</h1>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Task
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search tasks..."
                className="pl-10 pr-4 py-2 border rounded-lg bg-background w-full"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard Stats */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Tasks</CardTitle>
              <CardDescription className="text-2xl font-bold text-foreground">{tasks.length}</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">In Progress</CardTitle>
              <CardDescription className="text-2xl font-bold text-yellow-500">{statusColumns["in-progress"].length}</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
              <CardDescription className="text-2xl font-bold text-green-500">{statusColumns.completed.length}</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Todo</CardTitle>
              <CardDescription className="text-2xl font-bold text-blue-500">{statusColumns.todo.length}</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {Object.entries(statusColumns).map(([status, tasks]) => (
            <div key={status} className="space-y-4">
              <h3 className="font-semibold text-lg capitalize flex items-center gap-2">
                {status === "in-progress" ? "In Progress" : status}
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                  {tasks.length}
                </span>
              </h3>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <Card key={task.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <button onClick={() => toggleTaskStatus(task.id)}>
                            {getStatusIcon(task.status)}
                          </button>
                          <CardTitle className="text-base">{task.title}</CardTitle>
                        </div>
                        <AlertCircle className={`h-4 w-4 ${getPriorityColor(task.priority)}`} />
                      </div>
                      <CardDescription className="text-sm">
                        {task.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {task.assignee}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {task.dueDate}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TaskManagerDemo;