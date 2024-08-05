function solve(input) {
    class Song {
        constructor(type, name, duration) {
            this.type = type;
            this.name = name;
            this.duration = duration;
        }
    }

    let songs = [];
    let songsCount = input.shift();
    let typeList = input.pop();

    for (let i = 0; i < songsCount; i++) {
        let [type, name, duration] = input[i].split("_");
        let song = new Song(type, name, duration);
        songs.push(song);
    }

    if (typeList === "all") {
        for (const song of songs) {
            console.log(song.name);
        }
    } else {
        songs.filter(song => song.type === typeList)
            .forEach(song => console.log(song.name))
    }
}

solve([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
solve([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
solve([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);