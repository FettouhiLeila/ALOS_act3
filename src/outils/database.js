import {
    writeFileSync
} from 'fs'
import Donneurs from '../../database/db.json'


export function get_Donneurs() {
    return Donneurs
}

export const get_Donneurs = id => {
    const podcast = podcasts.find(podcast => Donneurs.id == id)

    return podcast
}


export function add_podcast(podcast) {
    let new_podcasts = [
        ...podcasts,
        {
            ...podcast,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_podcasts)

    writeFileSync("database/podcasts.json", new_data)

    return new_podcasts
}

    const new_data = JSON.stringify(podcasts)

    writeFileSync("database/podcasts.json", new_data)

    return podcasts
}

export function delete_Donneurs(id) {
    let index = Donneurs.findIndex(Donneurs => Donneurs.id == id)

    Donneurs.splice(index, 1)
    delete_hosts(id)
    const new_data = JSON.stringify(Donneurs)

    writeFileSync("database/db.json", new_data)

    return podcasts
}

