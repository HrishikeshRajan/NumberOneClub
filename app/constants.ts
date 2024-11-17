

export const  getInstructorProfilePath = (path:string) => {
        return path.replace(/\[\.{3}[a-zA-Z0-9]+\]/g, (match) => {
            const id = match.replace(/\[\.{3}/, '').replace(/\]/g, '');
            return `instructor/${id}`;
        });
    }
