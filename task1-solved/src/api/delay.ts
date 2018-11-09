export function delay<T>(action: () => T, delayInMilliseconds: number = 1000): Promise<T> {
    return new Promise((resolve, reject) => {
        window.setInterval(
          () => {
              try {
                const result: T = action();
                resolve(result);
              } catch(e) {
                  reject(e);
              }
          },
          delayInMilliseconds);
      });
}
 