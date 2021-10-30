import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../UI/libraries/button";

const Home = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="pt6 flex flex-column items-center">
      <input type="text" placeholder="Please enter userid" onChange={(e) => setUserId(e.target.value)}></input>
      <div className="mb2"></div>
      <input type="password" placeholder="Please enter password" onChange={(e) => setPassword(e.target.value)}></input>
      <div className="mb2"></div>
      <Button disabled={!(userId && password)}
        onClick={() => router.push(`/candidate?freeLancerId=${userId}`)}
      >Login as Freelancer</Button>
       <div className="mb2"></div>
      <Button disabled={!(userId && password)}
      onClick={() => router.push(`/employer?employerId=${userId}`)}>
        Login as Employer</Button>
    </div>
  )
}

export default Home;