let s = "07:05:45PM";

let newTime = s.split(":")

if (s.includes("AM")) {
    console.log(s.substr(0, 8))
} else if (s.includes("PM")) {
    newTime[0] = parseInt(newTime[0]) + 12
    s = newTime.join(":")
    console.log(s.substr(0, 8))
}

