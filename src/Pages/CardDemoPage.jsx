import { Button } from "@/components/ui/button"
import {
  Card, 
//   CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export function CardDemo() {
  return (
     <div className="fixead inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
    <Card className="w-full max-w-sm mx-auto bg-white shadow-xl">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription>
          Sign in to your Gual Account to continue 
          trading.
        </CardDescription>
 
    
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="hover:shadow-lg  transition duration-300 ease-in-out"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password"
               type="password" 
                className="hover:shadow-lg transition duration-300 ease-in-out "/>




                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full py-5">
          Sign in
        </Button> 

      <p>  Don't have an account? <a href="#" className="underline">Sign up</a>  </p> 
      </CardFooter>
    </Card>
    </div>
  )
}