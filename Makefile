build: clean
	@sed -i.bak -e "s/Last[[:space:]]update:[[:space:]][0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]T[0-9][0-9]:[0-9][0-9]:[0-9][0-9]/Last update: `date +"%Y-%m-%dT%H:%M:%S"`/" src/humans.txt
	@rm -rf src/humans.txt.bak
	@node build.js

clean:
	@rm -rf build
	@rm -rf src/humans.txt.bak

serve:
	@sed -i.bak -e "s/Last[[:space:]]update:[[:space:]][0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]T[0-9][0-9]:[0-9][0-9]:[0-9][0-9]/Last update: `date +"%Y-%m-%dT%H:%M:%S"`/" src/humans.txt
	@rm -rf src/humans.txt.bak
	@node serve.js

test:
	@write-good src/articles/**/*.md

.PHONY: build serve clean
