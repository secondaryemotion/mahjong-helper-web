import axios from "axios";
import getTile, {getWaitTile} from "./Tiles.jsx";
import React from 'react';

export default async function requestData(hand) {
    try {
        const response = await axios.get("http://178.64.127.20:8080/analyseHand?hand=" + hand).then((response) => response.data)
        let handVariationTiles = response.handVariationTiles
        console.log(handVariationTiles)
        let handVariationWaitsTiles = response.handVariationWaitsTiles
        console.log(handVariationWaitsTiles)

        function TileResult() {
            let resarr = Array(handVariationTiles.length)
            for (let i = 0; i < resarr.length; i++) {
                resarr[i] = generateRowResult(i);
            }
            return resarr.map(((item, index) => <div className="hand-tiles-box" key={index}> {item} </div>));
        }

        function generateRowResult(i) {
            const handVariations = handVariationTiles[i].map(tile => <React.Fragment
                key={crypto.randomUUID()}>{getTile(tile)}</React.Fragment>)
            const handWaits = handVariationWaitsTiles[i].map(tile => <React.Fragment
                key={crypto.randomUUID()}>{getWaitTile(tile)}</React.Fragment>)
            return (
                <>
                    <div className="hand-tile-row">{handVariations}{" "}{handWaits}</div>
                </>
            )
        }


        return (
            <>
                <TileResult/>
            </>
        )
    } catch {
        return <></>
    }
}

