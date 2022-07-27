function Meet(greeting: string = "Hi", name?: string): string {
    return greeting + ' ' + name + '.';
}

Meet("Hello", "Sushant");
Meet("Hello");