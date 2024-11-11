import { asset, getAssetByID } from './asset.js';
console.log('asset:' , asset);
console.log('Asset with ID:' , getAssetByID(1));

export function calculatePortfolioValue() {
    return.assets.reduce((totalvalue, asset)) => {
        return totalvalue + (asset.price * asset.quantity);
    }, 0); 
}

export function getPortfolioAllocation()
const assetvalue = asset.price * asset.quantity;
const allocationPercentage = (assetValue / totalvalue) * 100;
return {
    name: asset.name,
    allocationPercentage: allocationPercentage.toFixed(2)
    };
    

