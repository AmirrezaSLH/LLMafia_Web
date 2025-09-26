
"use client"
import * as React from 'react';
import { Box, Slider, Button } from '@mui/material';
import { useState } from 'react'

const SelectNumPlayers = () => {
    const [ numPlayers, setNumPlayers ] = useState<number>(6); 
    const [ numMafia, setNumMafia ] = useState<number>(1);

    return (
        <Box sx={{ width: 300 }}>
        {/* Uncontrolled slider #1 */}
        <h2> Select Number of Players </h2>
        <Slider
          value={numPlayers}
          min={4}
          max={12}
          aria-label="Number of Players"
          valueLabelDisplay="auto"
          onChange={ (event, newValue) => setNumPlayers(newValue as number) }
        />
  
        {/* Uncontrolled slider #2 */}
        <h2> Select Number of Mafia </h2>
        <Slider
          size="small"
          value={numMafia} // initial value
          min={1}
          max={ Math.floor(numPlayers / 2) - 1}
          aria-label="Number of Mafia"
          valueLabelDisplay="auto"
          onChange={ (event, newValue) => setNumMafia(newValue as number) }
        />
      </Box>
  );
}

const ConfigSection = () => {
    return (
        <div className="text-white bg-black"> 
            <h1> Config Section </h1>
            < SelectNumPlayers />
        </div>
    )
}

export default function Page() {
    return (
        <div>
            <h1>Hello, Next.js!</h1>
            <ConfigSection />
            <Button
                onClick={() => {
                    alert('clicked');
                }}
            >
                Start Game
            </Button>

        </div>
    ) 
  }