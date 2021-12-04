import { Summary } from "../Summary";
import { PositionsTable } from "../PositionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <PositionsTable />
    </Container>
  )

}