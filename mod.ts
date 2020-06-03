export async function prompt(question: string = ""): Promise<string> {
  const buf = new Uint8Array(1024);

  await Deno.stdout.write(new TextEncoder().encode(question));

  const n = <number>await Deno.stdin.read(buf);
  const answer = new TextDecoder().decode(buf.subarray(0, n));

  return answer.trim();
}
