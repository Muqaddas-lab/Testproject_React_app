import Image from "next/image";
import Team from "@/components/Cards/Team";
import Header from "@/components/Header/Header";
import RowTeam from"@/components/layout/RowTeam";
import Form from "@/components/input/form";
import Control from "@/components/Form/control";
import Uncontrolled from "@/components/Form/uncontrolled";
import FetchingData from "@/components/Form/fetch";
import Parent from "@/components/parent_2child/parent";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const matches = [
  {
    team1: "Liverpool",
    team2: "Manchester City",
    league: "Premier League",
    time: "8:15 PM",
    date: "Thu 07 Dec",
    stadiumName: "Anfield Stadium",
  },
  {
    team1: "Chelsea",
    team2: "Manchester United",
    league: "Premier League",
    time: "8:15 PM",
    date: "Thu 07 Dec",
    stadiumName: "Old Trafford stadium",
  }
];



export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Team />
      <Form />
      <Control/>
     <Uncontrolled/>
     <FetchingData/>
     <Parent/>
    </div>
  );
}
