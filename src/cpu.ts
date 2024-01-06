type Condition = '+' | '-';

type Instruction =
  | {op: 'push'; operand: number; cond?: Condition}
  | {op: 'drop'; cond?: Condition}
  | {op: 'eq'; cond?: Condition}
  | {op: 'ne'; cond?: Condition}
  | {op: 'gt'; cond?: Condition}
  | {op: 'ge'; cond?: Condition}
  | {op: 'lt'; cond?: Condition}
  | {op: 'le'; cond?: Condition}
  | {op: 'add'; cond?: Condition}
  | {op: 'sub'; cond?: Condition};

export function execute(instruction: Instruction, stack: number[]) {
  console.log(instruction, stack);
}

export function parse(code: string): Instruction[] {
  const lines = code.split('\n');
  const output: Instruction[] = [];

  for (const line of lines) {
    const trimmed = line.replace('#.+$', '').trim();
    console.log(trimmed);
  }

  return output;
}
