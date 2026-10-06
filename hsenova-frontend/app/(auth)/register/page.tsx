
import AuthLeft from "@/src/components/auth/AuthLeft";
import CreateWorkspaceForm from "@/src/components/auth/CreateWorkspaceForm";
import RegisterForm from "@/src/components/auth/CreateWorkspaceForm";
export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-row gap-6 rounded-lg border-1 border-grey bg-background h-164 w-1024 mx-16 my-4">
        <div className="flex flex-col w-1/2 border-r-1 border-grey">
            <AuthLeft />
        </div>
        <div className="flex flex-col w-1/2">
            <CreateWorkspaceForm />
        </div>
      </div>   
    </main>
  );
}
