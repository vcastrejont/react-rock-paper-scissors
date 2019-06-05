import { random } from "lodash";

export function cpuPlay() {
  const moves = ["rock", "paper", "scissors"];
  return moves[random(0, 2)];
}

export function gameResult(userPlay, cpuPlay) {
  if (userPlay === cpuPlay) {
    return "draw";
  }
  switch (userPlay) {
    case "rock":
      return cpuPlay === "scissors" ? "victory" : "defeat";
      break;
    case "scissors":
      return cpuPlay === "paper" ? "victory" : "defeat";
      break;
    case "paper":
      return cpuPlay === "rock" ? "victory" : "defeat";
      break;
    default:
      break;
  }
}
