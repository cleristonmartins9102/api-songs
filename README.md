# API for manager list of songs

-Execute NPM Install for install dependences. <br>
-Database model needed to be installed before executes the Server (structure is on sql directory).<br>
-Execute the server with NPM Start command and enjoy the api.<br>


## Routes
/list         (No Expect parameter)<br>
/list/byid    (Expect { id_music: number } as parameter)<br>
/update       (Expect { id_music: number } as parameter)<br>
/delete       (Expect { id_music: number, name: string, id_artist: number } as parameter)<br>
