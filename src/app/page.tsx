'use client'
import Image from "next/image";
import React, { useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import { HomeComponent } from "../components/HomeComponent/HomeComponent";

export default function Home() {
  const [token, setToken] = useState<string>("");

  return (
    <div>
      <NavBar token={token} setToken={setToken} />
      <HomeComponent/>
    </div>
  );
}
