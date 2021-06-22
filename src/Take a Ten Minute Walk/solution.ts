export function isValidWalk(walk: string[]): boolean {
    if (walk.length !== 10 || walk[0] === walk[walk.length - 1]) {
        return false;
    }
    const countObjects: { [value: string]: number } = {};
    walk.sort();
    walk.forEach((x: string) => { countObjects[x] = (countObjects[x] || 0) + 1; });
    const counts = Object.values(countObjects);
    return counts.every(count => count === counts[0]);
}

