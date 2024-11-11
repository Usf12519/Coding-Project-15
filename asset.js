export const assets = [
    { id: 1, name: 'Camera', type: X15, Price: 200, Quantity: 500},
    { id: 2, name: 'Telescope', type: E60, Price: 100, Quantity: 350},
]; 

export function getAssetByID (id) {
    return asset.find(asset => asset.id === id);
}
    
