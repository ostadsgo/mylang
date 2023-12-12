import re


class Pattern:
    IDENTIFIER = re.compile(r"[a-zA-Z_][a-zA-Z0-9_]*")
    NUMBER = re.compile(r"\d+")
    SPACE = re.compile(r"")
    SEMICOLON = re.compile(r";")
    ASSIGNMENT = re.compile(r":=")


class Lexer:
    def __init__(self, source_code):
        self.source_code = source_code
        self.tokens = []
        self.curr_pos = 0
        self.pattern = Pattern()

    def match_token(self):
        id_match = self.pattern.IDENTIFIER.match(self.source_code, self.curr_pos)
        if self.source_code[self.curr_pos].isspace():
            return " "

        if id_match:
            identifier = id_match.group()
            self.curr_pos = id_match.end()
            return {"type": "IDENTIFIER", "value": identifier}

        number_match = self.pattern.NUMBER.match(self.source_code, self.curr_pos)
        if number_match:
            number = number_match.group()
            self.curr_pos = number_match.end()
            return {"type": "NUMBER", "value": int(number)}

        semicolon_match = self.pattern.SEMICOLON.match(self.source_code, self.curr_pos)
        if semicolon_match:
            number = semicolon_match.group()
            self.curr_pos = semicolon_match.end()
            return {"type": "SEMICOLON", "value": ";"}
        assignment_match = self.pattern.ASSIGNMENT.match(
            self.source_code, self.curr_pos
        )
        if assignment_match:
            number = assignment_match.group()
            self.curr_pos = assignment_match.end()
            return {"type": "ASSIGNMENT", "value": ":="}

    def tokenize(self):
        while self.curr_pos < len(self.source_code):
            a_match = self.match_token()
            if a_match == " ":
                self.curr_pos += 1
                continue
            if a_match:
                self.tokens.append(a_match)
            else:
                print(f"Match not found {self.curr_pos}")
                return

        return self.tokens



