type Condition = '+' | '-';

export type Instruction =
  | {op: 'push'; operand: number; cond?: Condition}
  | {op: 'drop'; cond?: Condition}
  | {op: 'eq'; cond?: Condition}
  | {op: 'ne'; cond?: Condition}
  | {op: 'gt'; cond?: Condition}
  | {op: 'ge'; cond?: Condition}
  | {op: 'lt'; cond?: Condition}
  | {op: 'le'; cond?: Condition}
  | {op: 'add'; cond?: Condition}
  | {op: 'sub'; cond?: Condition}
  | {op: 'skip'; cond?: Condition};

// 1. Optional + or - for conditions
// 2. Instruction
// 3. Operands, which is a space-separated list of numbers
//
//                   1        2           3
//                ┏━━┻━━┓   ┏━┻━┓   ┏━━━━━┻━━━━━┓
const pattern = /^([+-])?\s*(\w+)\s*((?:\d+\s*)*)$/;

export function parse(code: string): Instruction[] {
  const lines = code.split('\n');
  const output: Instruction[] = [];

  for (const line of lines) {
    const trimmed = line.replace(/#.+$/, '').trim();

    if (!trimmed) {
      output.push({op: 'skip'});
      continue;
    }

    const matches = trimmed.match(pattern);

    if (!matches) {
      throw new Error('Invalid instruction!');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_fullMatch, cond, operator, raw_operands = ''] = matches;
    const operands = raw_operands.split(/\s/).map(Number);

    switch (operator) {
      case 'push': {
        output.push({
          cond: cond as Condition,
          op: operator,
          operand: operands[0],
        });
        break;
      }
      case 'add':
      case 'sub':
      case 'drop':
      case 'eq':
      case 'ne':
      case 'gt':
      case 'lt':
        output.push({cond: cond as Condition, op: operator});
    }
  }

  return output;
}

export function execute(
  lineNumber: number,
  instructions: Instruction[],
  stack: number[],
): [nextStack: number[], nextLine: number] {
  const instruction = instructions[lineNumber];

  // Truthy conditional
  if (instruction.cond === '+') {
    // If falsey, don't execute the instruction.
    if (stack[0] === 0) {
      return [stack, lineNumber + 1];
    }
  }

  // Falsey conditional
  if (instruction.cond === '-') {
    // If truthy, don't execute the instruction.
    if (stack[0] > 0) {
      return [stack, lineNumber + 1];
    }
  }

  switch (instruction.op) {
    case 'add': {
      const [a, b, ...rest] = stack;
      const nextStack = [a + b, ...rest];
      return [nextStack, lineNumber + 1];
    }
    case 'drop': {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, ...rest] = stack;
      return [rest, lineNumber + 1];
    }
    case 'push': {
      const nextStack = [instruction.operand, ...stack];
      return [nextStack, lineNumber + 1];
    }
    case 'sub': {
      const [a, b, ...rest] = stack;
      const nextStack = [a - b, ...rest];
      return [nextStack, lineNumber + 1];
    }
    case 'eq': {
      const [a, b, ...rest] = stack;
      const nextStack = [a === b ? 1 : 0, ...rest];
      return [nextStack, lineNumber + 1];
    }
    case 'ne': {
      const [a, b, ...rest] = stack;
      const nextStack = [a !== b ? 1 : 0, ...rest];
      return [nextStack, lineNumber + 1];
    }
    case 'gt': {
      const [a, b, ...rest] = stack;
      const nextStack = [a > b ? 1 : 0, ...rest];
      return [nextStack, lineNumber + 1];
    }
    case 'ge': {
      const [a, b, ...rest] = stack;
      const nextStack = [a >= b ? 1 : 0, ...rest];
      return [nextStack, lineNumber + 1];
    }
    case 'lt': {
      const [a, b, ...rest] = stack;
      const nextStack = [a < b ? 1 : 0, ...rest];
      return [nextStack, lineNumber + 1];
    }
    case 'le': {
      const [a, b, ...rest] = stack;
      const nextStack = [a <= b ? 1 : 0, ...rest];
      return [nextStack, lineNumber + 1];
    }
    default:
      return [stack, lineNumber + 1];
  }
}
