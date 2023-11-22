import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function BetCard(props) {
  return (
    <Card className="w-[350px] h-[11.5rem] bg-gradient-to-r from-orange-300 to-rose-300">
    <CardHeader>
      {console.log(props)}
      <CardTitle>{props.name ? props.name : "Bet Project"}</CardTitle>
      <CardDescription className="mt-10">{props.desc ? props.desc : 'Bet on new project in one-click.'}</CardDescription>
    </CardHeader>
    <CardFooter className="flex justify-between mt-8">
      <Button variant="outline" className="text-orange-900 bg-white">{props.buttonA ? props.buttonA : "Bet A"}</Button>
      <Button variant="outline" className="bg-white text-orange-900">{props.buttonB ? props.buttonB : "Bet B"}</Button>
    </CardFooter>
  </Card>
  )
}

export default BetCard