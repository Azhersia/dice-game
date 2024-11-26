"use client";
import { useState } from "react";

export default function DiceGame() {
  const [playerName, setPlayerName] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [animationClass, setAnimationClass] = useState("");

  function rollDice() {
    if (!playerName) {
      setError("Please enter a username.");
      return;
    }

    setError(null);
    setIsRolling(true);
    setAnimationClass("rolling"); // Trigger animation when rolling starts

    // Simulate dice roll with a short delay
    const roll = Math.floor(Math.random() * 6) + 1;

    setTimeout(() => {
      setResult(roll);
      console.log(`Saving to DB: Player ${playerName} rolled ${roll}`);
      setIsRolling(false);
      setAnimationClass(""); // Reset animation class after the roll
    }, 1000); // Simulate network delay
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <input
        type="text"
        placeholder="Enter your username"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        className="bg-white p-2 rounded-md shadow-md border border-gray-300 mb-4 focus:ring-2 focus:ring-blue-500 w-64"
      />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={rollDice}
        className={`px-4 py-2 rounded-md text-white ${isRolling ? 'bg-[#708069]' : 'bg-[#708566] hover:bg-[#56644e]'}`}
        disabled={isRolling}
      >
        {isRolling ? "Rolling..." : "Roll"}
      </button>
      
      {/* Dice Animation */}
      <div
        className={`mt-4 w-16 h-16 bg-white border-4 border-gray-300 rounded-md ${animationClass}`}
        style={{
          display: isRolling ? "block" : "none",
        }}
      >
        <div className="w-full h-full flex justify-center items-center">
          <span className="text-2xl font-bold">{isRolling ? "?" : result}</span>
        </div>
      </div>

      {/* Result Display */}
      {result !== null && !isRolling && (
        <p className="mt-6 text-xl text-gray-800">
           You rolled a <span className="font-bold">{result}</span>!
        </p>
      )}
    </div>
  );
}
