const { ActionRowBuilder, ButtonBuilder } = require('discord.js');


class Utils {
    createBtns(data, rows = []) {
        let btns = [], lim = Math.min(5, data.length), tData; // max 5 btns in a raw
        
        for (let i = 0; i < lim; i++) {
            tData = data[i];
    
            btns.push(new ButtonBuilder()
                .setCustomId(tData.id)
                .setStyle(tData.style));
    
            if (tData.label) btns[i].setLabel(tData.label);
            if (tData.emoji) btns[i].setEmoji(tData.emoji);
        }
    
        data.splice(0, lim);
        rows.push(new ActionRowBuilder().addComponents(...btns));
    
        if (data.length > 0) return this.createBtns(data, rows);
        else return rows;
    }
}


module.exports = new Utils;