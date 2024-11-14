"use client"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  import { Heading } from "./Heading"
  import { useState } from "react"
  
  export function ExpertToggler() {
    const [selectedTab, setSelectedTab] = useState("find")
  
    return (
      <Tabs defaultValue="find" className="flex flex-col items-center justify-center font-euclid w-full">
        <div className="relative flex items-center justify-center w-full max-w-xs lg:max-w-lg p-1 py-4 lg:py-5 bg-yellow-400 rounded-full">

          <TabsList className="flex w-full relative z-10 bg-yellow-400 ">
            <TabsTrigger
              value="find"
              onClick={() => setSelectedTab("find")}
              className={`flex-1 text-md lg:text-lg text-center py-2 font-semibold transition-colors duration-100 rounded-3xl data-[state=active]:text-teal-800  data-[state=active]:py-3  lg:data-[state=active]:py-4 data-[state=active]:rounded-full  data-[state=inactive]:text-teal-800 ${
                selectedTab === "find" ? "text-teal-800" : "text-teal-800"
              }`}
            >
              Find Expert
            </TabsTrigger>
            <TabsTrigger
              value="become"
              onClick={() => setSelectedTab("become")}
              className={`flex-1 text-center text-md lg:text-lg py-2 font-semibold transition-colors duration-300 rounded-3xl  data-[state=active]:py-3  lg:data-[state=active]:py-4 data-[state=active]:rounded-full data-[state=active]:text-teal-800 data-[state=inactive]:text-teal-800 ${
                selectedTab === "become" ? "text-teal-800" : "text-teal-800"
              }`}
            >
              Become Expert
            </TabsTrigger>
          </TabsList>
        </div>
  
        <div className="mt-5 w-full">
          <TabsContent value="find" className={selectedTab === "find" ? "block" : "hidden"}>
  
            <Heading title="Find an Expert" className="text-2xl font-bold text-center" />
          </TabsContent>
          <TabsContent value="become" className={selectedTab === "become" ? "block" : "hidden"}>

            <Heading title="Become an Expert" className="text-2xl font-bold text-center" />
          </TabsContent>
        </div>
      </Tabs>
    )
  }
  