interface MouseListenerProcess {
    mouseReleased(e: any): void
    mousePressed(e: any): void
    mouseEntered(e: any): void
    mouseClicked(e: any): void
    mouseExited(e: any): void
}

abstract class MouseListenerProcessAdapter implements MouseListenerProcess {
    mouseReleased(e: any): void {

    }
    mousePressed(e: any): void {

    }
    abstract mouseEntered(e: any): void
    abstract mouseClicked(e: any): void
    abstract mouseExited(e: any): void
}
class MouseListenerProcessSon extends MouseListenerProcessAdapter {
    mouseEntered(e: any): void {
        throw new Error("Method not implemented.")
    }
    mouseClicked(e: any): void {
        throw new Error("Method not implemented.")
    }
    mouseExited(e: any): void {
        throw new Error("Method not implemented.")
    }
}