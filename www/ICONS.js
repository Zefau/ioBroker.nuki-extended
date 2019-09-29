/*
 *
 * @source https://www.flaticon.com/packs/essential-set-2
 * @source https://www.flaticon.com/packs/doors
 */
var ICONS = {
	'DEVICE': 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wNTEgNTEyLjA1MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA1MSA1MTIuMDUxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEpIj4KCTxwYXRoIHN0eWxlPSJmaWxsOiM0MjhERkY7IiBkPSJNMjcyLjE5MSw1MTMuMDUxYy0wLjEwMiwwLTAuMjEyLDAtMC4zMTQtMC4wMDljLTIuMy0wLjA3OC00LjQ3NS0xLjA2OC02LjA0NC0yLjc1MiAgIGMtMS41NjktMS42ODQtMi40MDQtMy45MjMtMi4zMi02LjIyM2M2LjM4MS0xODMuMDY4LTE2Ljc4OC0yNjUuNDkyLTE3LjAyNS0yNjYuMjk3Yy0wLjg2OC0yLjk4MS0wLjA3OC02LjE5OCwyLjA3MS04LjQzOCAgIHM1LjMzMi0zLjE2Miw4LjM0Ni0yLjQxN2MzLjAxNCwwLjc0NSw1LjQwMSwzLjA0Miw2LjI2MSw2LjAyNWMwLjk4MywzLjQyNCwyNC4xNyw4NS45MDcsMTcuNjg2LDI3MS43MzcgICBDMjgwLjY5Miw1MDkuMzQ3LDI3Ni44NjIsNTEzLjA0OSwyNzIuMTkxLDUxMy4wNTFMMjcyLjE5MSw1MTMuMDUxeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQyOERGRjsiIGQ9Ik00ODguMzQzLDI4Ny40MjRjLTQuNDYxLTAuMDA0LTguMTkyLTMuMzktOC42MjctNy44M2MtMy4yOTYtMzMuNzM3LTEwLjk0LTk1LjMyMi0yNS4wODUtMTI4Ljc2MyAgIEM0MDguMTIxLDQwLjg2NSwyODEuNDg2LTEwLjgzNywxNzEuMzAxLDM1LjE1M2MtMTQuNjA4LDYuMDYtMjguNjM5LDEzLjQyNi00MS45MjMsMjIuMDA4Yy0yLjYwMSwxLjctNS45MTIsMS44OC04LjY4MiwwLjQ3MiAgIGMtMi43Ny0xLjQwOC00LjU3Ni00LjE4OC00LjczNi03LjI5MWMtMC4xNi0zLjEwMywxLjM1LTYuMDU1LDMuOTYxLTcuNzRjMTQuMTY0LTkuMTUzLDI5LjEyNS0xNy4wMDcsNDQuNzAzLTIzLjQ2NiAgIGMxMTguOTk4LTQ5LjY3LDI1NS43NjIsNi4xNywzMDUuOTkyLDEyNC45MzJjMTQuMjk3LDMzLjc4LDIyLjIyOSw5MS40MjQsMjYuMzczLDEzMy44M2MwLjQ2Niw0Ljc2OS0zLjAyLDkuMDEzLTcuNzg4LDkuNDgzICAgQzQ4OC45MTEsMjg3LjQwNyw0ODguNjIzLDI4Ny40MjQsNDg4LjM0MywyODcuNDI0eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQyOERGRjsiIGQ9Ik00MC43MDgsMzU2Ljg0OGMtMy44MzksMC4wMDEtNy4yMjItMi41MjMtOC4zMTMtNi4yMDNDLTExLjE0OCwyMDQuNDUsMzUuMzQ0LDExOC45NSw4Mi4wMDUsNzIuOTc1ICAgYzIuMjA1LTIuMTg4LDUuNDExLTMuMDMxLDguNDA3LTIuMjA5YzIuOTk2LDAuODIyLDUuMzI0LDMuMTgyLDYuMTA0LDYuMTg5YzAuNzgsMy4wMDctMC4xMDcsNi4yMDEtMi4zMjUsOC4zNzYgICBjLTYyLjA2OCw2MS4xNTMtNzcuNjc4LDE1MS4xNzgtNDUuMTcsMjYwLjM2NGMwLjc3NywyLjYyNSwwLjI3Miw1LjQ2My0xLjM2NCw3LjY1OEM0Ni4wMjEsMzU1LjU0OCw0My40NDYsMzU2Ljg0Myw0MC43MDgsMzU2Ljg0OCAgIEw0MC43MDgsMzU2Ljg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM0MjhERkY7IiBkPSJNOTcuODQ0LDQ0My42MjdjLTIuMzAyLDAuMDAxLTQuNTEtMC45MTMtNi4xMzgtMi41NGMtMS42MjgtMS42MjgtMi41NDItMy44MzYtMi41NC02LjEzOCAgIGMwLTYyLjA0Mi0wLjE2MS0xMDEuMTUzLTMuMjcyLTEyMi40MDdjLTEuNTU3LTkuMzU1LTMuNzE0LTE4LjYtNi40NTgtMjcuNjc4QzU0LjM5MywxOTYuMTMxLDk5LjU3NiwxMDIuNjczLDE4NC42NzQsNjcuMTg3ICAgYzI0LjI3OS0xMC4yMTMsNTAuNTAzLTE0Ljk3Miw3Ni44MjItMTMuOTQxYzY5LjM3MywyLjQ4MywxNDQuOTkxLDYxLjA1MSwxNjguNTc2LDEzMC41NTEgICBjMTkuMTM2LDU2LjM5LDE5LjM2NCwxNDkuOTQ5LDE3LjA2OCwyMzQuMDM0Yy0wLjIzNSw0Ljc0NS00LjE2NCw4LjQ2NS04LjkxNSw4LjQ0MWMtNC43OS0wLjEzNy04LjU2NS00LjEyNS04LjQ0MS04LjkxNSAgIGMyLjI2My04Mi41NDIsMi4xMS0xNzQuMTg2LTE2LjE1My0yMjcuOTgzYy0yMS4wOTMtNjIuMTc4LTkxLjA0Mi0xMTYuNTc2LTE1Mi43NTQtMTE4Ljc4OCAgIGMtNTIuNjY4LTEuOTE1LTEwMy4wOCwyMS40NTYtMTM1LjY1Myw2Mi44ODdTODEuODQsMjI5LjQwOCw5Ni4xMzIsMjgwLjEzNmMyLjk2NCw5LjgsNS4yOCwxOS43ODUsNi45MzIsMjkuODkgICBjMy4yOTcsMjIuNDkyLDMuNDU4LDYwLjIwMywzLjQ1OCwxMjQuOTI0YzAuMDAxLDIuMzAyLTAuOTEzLDQuNTEtMi41NCw2LjEzOEMxMDIuMzU0LDQ0Mi43MTUsMTAwLjE0Niw0NDMuNjI5LDk3Ljg0NCw0NDMuNjI3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQyOERGRjsiIGQ9Ik0zODUuMDA1LDQ2OS42NjFjLTAuMTAyLDAtMC4yMTIsMC0wLjMxNC0wLjAwOWMtMi4zLTAuMDc5LTQuNDc0LTEuMDctNi4wNDMtMi43NTMgICBjLTEuNTY5LTEuNjgzLTIuNDA0LTMuOTIyLTIuMzIyLTYuMjIxYzQuODY0LTEzOS41MDgsMy40ODMtMjE5LjQ1OC0xNy42MDItMjY5LjI3MWMtMjEuMTcyLTUwLjAzNS03NC45OTgtNzcuODc1LTEyOC4wNjgtNjYuMjM3ICAgYy00LjY4LDEuMDM0LTkuMzEzLTEuOTIxLTEwLjM0Ny02LjYwMnMxLjkyMS05LjMxMyw2LjYwMi0xMC4zNDdjNjEuMjQxLTEzLjQzOCwxMjMuMzYxLDE4LjY4NCwxNDcuNzk3LDc2LjQyNCAgIGMyMi40ODMsNTMuMTE5LDI0LjAyNSwxMzEuNTI1LDE4Ljk1OCwyNzYuNjQ0QzM5My41MDYsNDY1Ljk1NywzODkuNjc2LDQ2OS42NiwzODUuMDA1LDQ2OS42NjFMMzg1LjAwNSw0NjkuNjYxeiBNMTU4LjU4OSw0NTIuMzA1ICAgYy0yLjMwMiwwLjAwMS00LjUxLTAuOTEzLTYuMTM4LTIuNTRjLTEuNjI4LTEuNjI4LTIuNTQyLTMuODM2LTIuNTQtNi4xMzhjMC44MzEtNTUuNDkzLTUuMTQ2LTExMC44NzgtMTcuNzk3LTE2NC45MTUgICBjLTE1LjgxNC01OC40MjQsMy42MDEtMTE4LjcwMyw0OC4yOTctMTUwLjA4NWMyLjUzNy0xLjc4LDUuODMxLTIuMDcyLDguNjQyLTAuNzY1YzIuODEsMS4zMDcsNC43MSw0LjAxNCw0Ljk4Myw3LjEwMiAgIGMwLjI3MywzLjA4Ny0xLjEyMiw2LjA4Ni0zLjY1OSw3Ljg2NmMtMzguNzI5LDI3LjE5NS01NS40MjQsNzkuOTQ5LTQxLjUzNCwxMzEuMjcyYzAuNzM3LDIuNjI3LDE4LjQyNCw2Ny4wMDgsMTguNDI0LDE2OS41MjUgICBjMC4wMDEsMi4zMDItMC45MTMsNC41MS0yLjU0LDYuMTM4QzE2My4wOTksNDUxLjM5MywxNjAuODkxLDQ1Mi4zMDcsMTU4LjU4OSw0NTIuMzA1TDE1OC41ODksNDUyLjMwNXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM0MjhERkY7IiBkPSJNMzMyLjkwMyw0OTUuNjk1Yy0wLjEwMiwwLTAuMjAzLDAtMC4zMDUtMC4wMDljLTIuMy0wLjA3Ni00LjQ3Ni0xLjA2NC02LjA0Ny0yLjc0NiAgIGMtMS41NzEtMS42ODItMi40MDgtMy45Mi0yLjMyNi02LjIyYzAuMzczLTEwLjkwNy0wLjAwOS0yNy44NzMtMC4zNDctNDIuODM5Yy0wLjIzNy0xMC4yOTctMC40NDktMTkuODIyLTAuNDA3LTI2LjM0OCAgIGMwLjAzNS00Ljc2OCwzLjkwOS04LjYxNiw4LjY3OC04LjYxOGgwLjA1OWMyLjMwMiwwLjAxNCw0LjUwNCwwLjk0Myw2LjEyLDIuNTgyYzEuNjE3LDEuNjM5LDIuNTE1LDMuODUzLDIuNDk4LDYuMTU1ICAgYy0wLjA0Miw2LjM5OCwwLjE2OSwxNS43NDYsMC4zOTgsMjUuODNjMC4zNDcsMTUuMjAzLDAuNzM4LDMyLjQzMiwwLjMzOSw0My44MzFDMzQxLjQwOCw0OTEuOTg2LDMzNy41NzcsNDk1LjY5MywzMzIuOTAzLDQ5NS42OTUgICBMMzMyLjkwMyw0OTUuNjk1eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQyOERGRjsiIGQ9Ik0yMTAuNjU3LDQ5NS42OTVjLTIuMzAyLDAuMDAxLTQuNTEtMC45MTMtNi4xMzgtMi41NGMtMS42MjgtMS42MjgtMi41NDItMy44MzYtMi41NC02LjEzOCAgIGMwLTEwMy4yMi01LjUyNS0yMDcuMjEyLTEyLjA2OC0yMjcuMDc2Yy0xMi42MzMtMzQuOTkyLDQuMDc4LTczLjc4LDM4LjE4Ni04OC42MzZjMzUuMjU4LTE0LjczMiw3NS43OTEsMS44MTMsOTAuNjY5LDM3LjAwOSAgIGMxNy4zMDUsNDAuOTQxLDIyLjM4MSwxMTIuNjk1LDIzLjYwMiwxNjUuNjg2YzAuMTEyLDQuNzkzLTMuNjgyLDguNzY5LTguNDc0LDguODgxaC0wLjIwM2MtNC43MTQsMC04LjU2Ni0zLjc2Mi04LjY3OC04LjQ3NSAgIGMtMS4xNzgtNTEuNDkyLTUuOTkyLTEyMC45MTUtMjIuMTk1LTE1OS4yNjNjLTExLjEzNy0yNi40NDEtNDEuNTctMzguODg1LTY4LjA0Mi0yNy44MjIgICBjLTI1LjY5LDExLjQxOS0zOC4xMDQsNDAuODE5LTI4LjM3Myw2Ny4xOTVjNy45ODMsMjQuMjcxLDEyLjkzMiwxMzkuNTg1LDEyLjkzMiwyMzIuNWMwLjAwMSwyLjMwMi0wLjkxMyw0LjUxLTIuNTQsNi4xMzggICBDMjE1LjE2Nyw0OTQuNzgzLDIxMi45NTksNDk1LjY5NywyMTAuNjU3LDQ5NS42OTV6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
	
	'LOCK': 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU0IDU0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NCA1NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8cGF0aCBkPSJNNDMsMjAuMTEzVjE0LjVDNDMsNi41MDUsMzUuODIyLDAsMjcsMFMxMSw2LjUwNSwxMSwxNC41djUuNjEzYy0zLjQwMSwwLjU4Ni02LDMuNTUtNiw3LjExN3YxOS41NDIgIEM1LDUwLjc1Nyw4LjI0Myw1NCwxMi4yMjksNTRoMjkuNTQyQzQ1Ljc1Nyw1NCw0OSw1MC43NTcsNDksNDYuNzcxVjI3LjIyOUM0OSwyMy42NjMsNDYuNDAxLDIwLjY5OSw0MywyMC4xMTN6IE0xMywxNC41ICBDMTMsNy42MDcsMTkuMjgsMiwyNywyczE0LDUuNjA3LDE0LDEyLjVWMjBIMTNWMTQuNXogTTMxLDM4YzAsMi4yMDYtMS43OTQsNC00LDRzLTQtMS43OTQtNC00di02YzAtMi4yMDYsMS43OTQtNCw0LTRzNCwxLjc5NCw0LDQgIFYzOHoiIGZpbGw9IiNGRkZGRkYiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
	
	'UNLOCK': 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU0IDU0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NCA1NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8cGF0aCBkPSJNNDMsMjAuMTEzVjE0LjVDNDMsNi41MDUsMzUuODIyLDAsMjcsMFMxMSw2LjUwNSwxMSwxNC41YzAsMC41NTMsMC40NDcsMSwxLDFzMS0wLjQ0NywxLTFDMTMsNy42MDcsMTkuMjgsMiwyNywyICBzMTQsNS42MDcsMTQsMTIuNVYyMEgxMi4yMjlDOC4yNDMsMjAsNSwyMy4yNDMsNSwyNy4yMjl2MTkuNTQyQzUsNTAuNzU3LDguMjQzLDU0LDEyLjIyOSw1NGgyOS41NDJDNDUuNzU3LDU0LDQ5LDUwLjc1Nyw0OSw0Ni43NzEgIFYyNy4yMjlDNDksMjMuNjYzLDQ2LjQwMSwyMC42OTksNDMsMjAuMTEzeiBNMzEsMzhjMCwyLjIwNi0xLjc5NCw0LTQsNHMtNC0xLjc5NC00LTR2LTZjMC0yLjIwNiwxLjc5NC00LDQtNHM0LDEuNzk0LDQsNFYzOHoiIGZpbGw9IiNGRkZGRkYiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
	
	'LOCK_N_GO': 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8Zz4KCTxwYXRoIGQ9Ik0zNiwxNmMwLTMuMzA5LTIuNjkxLTYtNi02cy02LDIuNjkxLTYsNnY1aC01djE5aDIyVjIxaC01VjE2eiBNMjYsMTZjMC0yLjIwNiwxLjc5NC00LDQtNHM0LDEuNzk0LDQsNHY1aC04VjE2eiAgICBNMzEsMzIuODU4VjM1YzAsMC41NTMtMC40NDgsMS0xLDFzLTEtMC40NDctMS0xdi0yLjE0MmMtMS43Mi0wLjQ0Ny0zLTEuOTk5LTMtMy44NThjMC0yLjIwNiwxLjc5NC00LDQtNHM0LDEuNzk0LDQsNCAgIEMzNCwzMC44NTksMzIuNzIsMzIuNDExLDMxLDMyLjg1OHoiIGZpbGw9IiNGRkZGRkYiLz4KCTxjaXJjbGUgY3g9IjMwIiBjeT0iMjkiIHI9IjIiIGZpbGw9IiNGRkZGRkYiLz4KCTxwYXRoIGQ9Ik0zMCwwQzE1LjExMiwwLDMsMTIuMTEyLDMsMjdjMCwxNC4xMDksMTAuODgxLDI1LjcxOSwyNC42OTEsMjYuODk1bC00LjM5OCw0LjM5OGMtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNCAgIEMyMy40ODgsNTkuOTAyLDIzLjc0NCw2MCwyNCw2MHMwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M2w1Ljk5OS01Ljk5OWMwLjA5My0wLjA5MiwwLjE2Ni0wLjIwMywwLjIxNy0wLjMyNiAgIGMwLjEwMS0wLjI0NCwwLjEwMS0wLjUyLDAtMC43NjRjLTAuMDUxLTAuMTIzLTAuMTI0LTAuMjMzLTAuMjE3LTAuMzI2bC01Ljk5OS01Ljk5OWMtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMCAgIHMtMC4zOTEsMS4wMjMsMCwxLjQxNGw0LjE2NCw0LjE2NEMxNC44NjIsNTAuNTkzLDUsMzkuOTI3LDUsMjdDNSwxMy4yMTUsMTYuMjE1LDIsMzAsMnMyNSwxMS4yMTUsMjUsMjUgICBjMCw2LjYzMy0yLjU3LDEyLjg4MS03LjIzOCwxNy41OTNjLTAuMzg5LDAuMzkzLTAuMzg2LDEuMDI2LDAuMDA3LDEuNDE1YzAuMzkyLDAuMzg3LDEuMDI1LDAuMzg1LDEuNDE0LTAuMDA3ICAgQzU0LjIyNCw0MC45MTEsNTcsMzQuMTYzLDU3LDI3QzU3LDEyLjExMiw0NC44ODgsMCwzMCwweiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=',
	
	'LOCK_N_GO_WITH_UNLATCH': 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8Zz4KCTxwYXRoIGQ9Ik0zNiwxNmMwLTMuMzA5LTIuNjkxLTYtNi02cy02LDIuNjkxLTYsNnY1aC01djE5aDIyVjIxaC01VjE2eiBNMjYsMTZjMC0yLjIwNiwxLjc5NC00LDQtNHM0LDEuNzk0LDQsNHY1aC04VjE2eiBNMzksMjN2MTUgICBIMjFWMjNoM2gxMkgzOXoiIGZpbGw9IiNGRkZGRkYiLz4KCTxwYXRoIGQ9Ik0yOSwzMi44NThWMzVjMCwwLjU1MywwLjQ0OCwxLDEsMXMxLTAuNDQ3LDEtMXYtMi4xNDJjMS43Mi0wLjQ0NywzLTEuOTk5LDMtMy44NThjMC0yLjIwNi0xLjc5NC00LTQtNHMtNCwxLjc5NC00LDQgICBDMjYsMzAuODU5LDI3LjI4LDMyLjQxMSwyOSwzMi44NTh6IE0zMCwyN2MxLjEwMywwLDIsMC44OTcsMiwycy0wLjg5NywyLTIsMnMtMi0wLjg5Ny0yLTJTMjguODk3LDI3LDMwLDI3eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPHBhdGggZD0iTTMwLDBDMTUuMTEyLDAsMywxMi4xMTIsMywyN2MwLDE0LjEwOSwxMC44ODEsMjUuNzE5LDI0LjY5MSwyNi44OTVsLTQuMzk4LDQuMzk4Yy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0ICAgQzIzLjQ4OCw1OS45MDIsMjMuNzQ0LDYwLDI0LDYwczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzbDUuOTk5LTUuOTk5YzAuMDkzLTAuMDkyLDAuMTY2LTAuMjAzLDAuMjE3LTAuMzI2ICAgYzAuMTAxLTAuMjQ0LDAuMTAxLTAuNTIsMC0wLjc2NGMtMC4wNTEtMC4xMjMtMC4xMjQtMC4yMzMtMC4yMTctMC4zMjZsLTUuOTk5LTUuOTk5Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwICAgcy0wLjM5MSwxLjAyMywwLDEuNDE0bDQuMTY0LDQuMTY0QzE0Ljg2Miw1MC41OTMsNSwzOS45MjcsNSwyN0M1LDEzLjIxNSwxNi4yMTUsMiwzMCwyczI1LDExLjIxNSwyNSwyNSAgIGMwLDYuNjMzLTIuNTcsMTIuODgxLTcuMjM4LDE3LjU5M2MtMC4zODksMC4zOTMtMC4zODYsMS4wMjYsMC4wMDcsMS40MTVjMC4zOTIsMC4zODcsMS4wMjUsMC4zODUsMS40MTQtMC4wMDcgICBDNTQuMjI0LDQwLjkxMSw1NywzNC4xNjMsNTcsMjdDNTcsMTIuMTEyLDQ0Ljg4OCwwLDMwLDB6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
	
	'UNLATCH': 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU1IDU1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NSA1NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8cGF0aCBkPSJNNTQuOTI0LDIzLjYxOGMtMC4wNTEtMC4xMjMtMC4xMjUtMC4yMzQtMC4yMTctMC4zMjdMNDIuNzA4LDExLjI5M2MtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMHMtMC4zOTEsMS4wMjMsMCwxLjQxNCAgTDUxLjU4NywyM0gzNi4wMDFWMWMwLTAuNTUzLTAuNDQ3LTEtMS0xaC0zNGMtMC4wMzIsMC0wLjA2LDAuMDE1LTAuMDkxLDAuMDE4QzAuODU0LDAuMDIzLDAuODA1LDAuMDM2LDAuNzUyLDAuMDUgIEMwLjY1OCwwLjA3NSwwLjU3NCwwLjEwOSwwLjQ5MywwLjE1OEMwLjQ2NywwLjE3NCwwLjQzNSwwLjE3NCwwLjQxMSwwLjE5MkMwLjM4LDAuMjE1LDAuMzU2LDAuMjQ0LDAuMzI4LDAuMjY5ICBjLTAuMDE3LDAuMDE2LTAuMDM1LDAuMDMtMC4wNTEsMC4wNDdDMC4yMDEsMC4zOTgsMC4xMzksMC40ODksMC4wOTMsMC41ODljLTAuMDA5LDAuMDItMC4wMTQsMC4wNC0wLjAyMiwwLjA2ICBDMC4wMjksMC43NjEsMC4wMDEsMC44NzgsMC4wMDEsMXY0NmMwLDAuMTI1LDAuMDI5LDAuMjQzLDAuMDcyLDAuMzU1YzAuMDE0LDAuMDM3LDAuMDM1LDAuMDY4LDAuMDUzLDAuMTAzICBjMC4wMzcsMC4wNzEsMC4wNzksMC4xMzYsMC4xMzIsMC4xOTZjMC4wMjksMC4wMzIsMC4wNTgsMC4wNjEsMC4wOSwwLjA5YzAuMDU4LDAuMDUxLDAuMTIzLDAuMDkzLDAuMTkzLDAuMTMgIGMwLjAzNywwLjAyLDAuMDcxLDAuMDQxLDAuMTExLDAuMDU2YzAuMDE3LDAuMDA2LDAuMDMsMC4wMTgsMC4wNDcsMC4wMjRsMjIsN0MyMi43OTcsNTQuOTg0LDIyLjg5OSw1NSwyMy4wMDEsNTUgIGMwLjIxLDAsMC40MTctMC4wNjYsMC41OS0wLjE5MmMwLjI1OC0wLjE4OCwwLjQxLTAuNDg4LDAuNDEtMC44MDh2LTZoMTFjMC41NTMsMCwxLTAuNDQ3LDEtMVYyNWgxNS41ODZMNDEuMjk0LDM1LjI5MyAgYy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0QzQxLjQ4OSwzNi45MDIsNDEuNzQ1LDM3LDQyLjAwMSwzN3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M2wxMS45OTktMTEuOTk5ICBjMC4wOTMtMC4wOTIsMC4xNjYtMC4yMDMsMC4yMTctMC4zMjZDNTUuMDI1LDI0LjEzOCw1NS4wMjUsMjMuODYyLDU0LjkyNCwyMy42MTh6IE0yMC45MjksMzIuMzcxICBDMjAuNzczLDMyLjc2MywyMC4zOTcsMzMsMjAuMDAxLDMzYy0wLjEyNCwwLTAuMjUtMC4wMjItMC4zNzEtMC4wNzFsLTUtMmMtMC41MTMtMC4yMDUtMC43NjMtMC43ODctMC41NTgtMS4zICBjMC4yMDUtMC41MTUsMC43OTEtMC43NjMsMS4zLTAuNTU4bDUsMkMyMC44ODQsMzEuMjc2LDIxLjEzNCwzMS44NTgsMjAuOTI5LDMyLjM3MXogTTM0LjAwMSw0NmgtMTBWOCAgYzAtMC40MzYtMC4yODItMC44MjEtMC42OTctMC45NTNMNy40NDIsMmgyNi41NTlWNDZ6IiBmaWxsPSIjRkZGRkZGIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=',
	
	'DOOR_OPENED': 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDQ5Mi41IDQ5Mi41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTIuNSA0OTIuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yODUuMDQ4LDIxLjcyTDE2NC4yMzQsMHYyMS43Mkg3OS4yOTJ2NDMzLjM1OGgzMS40MDNWNTMuMTIzaDUzLjUzOVY0OTIuNWwyMDguMTUtMzcuNDIydi02MS4yMzVoOS40MjF2NjEuMjM1aDMxLjQwMyAgIFYyMS43MkgyODUuMDQ4eiBNMjAyLjUyNiwyNjMuMTI5Yy02Ljk5NywwLTEyLjY3LTcuMzgxLTEyLjY3LTE2LjQ4NmMwLTkuMTA0LDUuNjczLTE2LjQ4NSwxMi42Ny0xNi40ODVzMTIuNjcsNy4zODEsMTIuNjcsMTYuNDg1ICAgQzIxNS4xOTYsMjU1Ljc0OCwyMDkuNTIzLDI2My4xMjksMjAyLjUyNiwyNjMuMTI5eiBNMzgxLjgwNSwzNDQuNjQ2aC05LjQyMVYxNDIuNjIxaDkuNDIxVjM0NC42NDZ6IE0zODEuODA1LDkzLjQyM2gtOS40MjF2LTQwLjMgICBoOS40MjFWOTMuNDIzeiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=',
	
	'DOOR_CLOSED': 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDQ3OC42NjYgNDc4LjY2NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc4LjY2NiA0NzguNjY2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTcxLjU1MywwdjQ3OC4wODVsMzM1LjU2MSwwLjU4MVYwSDcxLjU1M3ogTTEwMy4xMDksNDQ2LjU4M1YzMS41NThoMjcyLjQ0NXY1Ni44MTNoLTEwLjc4MVY0Mi4wODZIMTEzLjg5M3YzOTQuNDY4ICAgaDI1MC44ODFWMzkwLjI3aDEwLjc4MXY1Ni43ODVMMTAzLjEwOSw0NDYuNTgzeiBNMzY0Ljc3MywxMzcuNDU5aDEwLjc4MVYzNDEuMThoLTEwLjc4MVYxMzcuNDU5eiBNMTY1Ljc4NywyMzkuMzIgICBjMCw5LjE0OC03LjQxOCwxNi41NjYtMTYuNTY4LDE2LjU2NmMtOS4xNSwwLTE2LjU2OC03LjQxOC0xNi41NjgtMTYuNTY2YzAtOS4xNSw3LjQxOC0xNi41NjgsMTYuNTY4LTE2LjU2OCAgIEMxNTguMzY5LDIyMi43NTIsMTY1Ljc4NywyMzAuMTcsMTY1Ljc4NywyMzkuMzJ6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
	
	'INITIALIZATION': 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU0IDU0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NCA1NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8Zz4KCTxwYXRoIGQ9Ik0yNywxOGMtNC45NjIsMC05LDQuMDM4LTksOXM0LjAzOCw5LDksOXM5LTQuMDM4LDktOVMzMS45NjIsMTgsMjcsMTh6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8cGF0aCBkPSJNNTEuMjIsMjFoLTIuMDE4Yy0wLjUxNS0xLjkxMS0xLjI3Mi0zLjc0LTIuMjYtNS40NTdsMS40MjYtMS40MjZjMC41MjUtMC41MjUsMC44MTQtMS4yMjQsMC44MTQtMS45NjYgICBjMC0wLjc0My0wLjI4OS0xLjQ0MS0wLjgxNC0xLjk2N2wtNC41NTMtNC41NTNjLTEuMDUtMS4wNDktMi44ODEtMS4wNTEtMy45MzMsMGwtMS40MjYsMS40MjZDMzYuNzQsNi4wNywzNC45MTEsNS4zMTMsMzMsNC43OTggICBWMi43OEMzMywxLjI0NywzMS43NTMsMCwzMC4yMiwwSDIzLjc4QzIyLjI0NywwLDIxLDEuMjQ3LDIxLDIuNzh2Mi4wMThjLTEuOTExLDAuNTE1LTMuNzQsMS4yNzItNS40NTcsMi4yNmwtMS40MjYtMS40MjYgICBjLTEuMDUxLTEuMDUyLTIuODgzLTEuMDUtMy45MzMsMGwtNC41NTMsNC41NTNjLTAuNTI1LDAuNTI1LTAuODE0LDEuMjI0LTAuODE0LDEuOTY3YzAsMC43NDIsMC4yODksMS40NCwwLjgxNCwxLjk2NmwxLjQyNiwxLjQyNiAgIEM2LjA3LDE3LjI2LDUuMzEyLDE5LjA4OSw0Ljc5OCwyMUgyLjc4QzEuMjQ3LDIxLDAsMjIuMjQ3LDAsMjMuNzh2Ni40MzhDMCwzMS43NTIsMS4yNDcsMzMsMi43OCwzM2gyLjAxOCAgIGMwLjUxNSwxLjkxMSwxLjI3MiwzLjc0LDIuMjYsNS40NTdsLTEuNDI2LDEuNDI2Yy0wLjUyNSwwLjUyNS0wLjgxNCwxLjIyNC0wLjgxNCwxLjk2NmMwLDAuNzQzLDAuMjg5LDEuNDQxLDAuODE0LDEuOTY3ICAgbDQuNTUzLDQuNTUzYzEuMDUsMS4wNTEsMi44ODIsMS4wNTIsMy45MzMsMGwxLjQyNi0xLjQyNmMxLjcxNywwLjk4NywzLjU0NiwxLjc0NSw1LjQ1NywyLjI2djIuMDE3QzIxLDUyLjc1MiwyMi4yNDcsNTQsMjMuNzgsNTQgICBoNi40MzljMS41MzMsMCwyLjc4LTEuMjQ4LDIuNzgtMi43ODF2LTIuMDE3YzEuOTExLTAuNTE1LDMuNzQtMS4yNzIsNS40NTctMi4yNmwxLjQyNiwxLjQyNmMxLjA1MiwxLjA1MiwyLjg4MiwxLjA1LDMuOTMzLDAgICBsNC41NTMtNC41NTNjMC41MjUtMC41MjUsMC44MTQtMS4yMjQsMC44MTQtMS45NjdjMC0wLjc0Mi0wLjI4OS0xLjQ0LTAuODE0LTEuOTY2bC0xLjQyNi0xLjQyNiAgIGMwLjk4Ny0xLjcxNywxLjc0NS0zLjU0NiwyLjI2LTUuNDU3aDIuMDE4YzEuNTMzLDAsMi43OC0xLjI0OCwyLjc4LTIuNzgxVjIzLjc4QzU0LDIyLjI0Nyw1Mi43NTMsMjEsNTEuMjIsMjF6IE0zOSwyNyAgIGMwLDYuNjE3LTUuMzgzLDEyLTEyLDEycy0xMi01LjM4My0xMi0xMnM1LjM4My0xMiwxMi0xMlMzOSwyMC4zODMsMzksMjd6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
	
	'TRIGGER': 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU4Ljk5NSA1OC45OTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU4Ljk5NSA1OC45OTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTM5LjkyNyw0MS45MjljLTAuNTI0LDAuNTI0LTAuOTc1LDEuMS0xLjM2NSwxLjcwOWwtMTcuMjgtMTAuNDg5YzAuNDU3LTEuMTQ0LDAuNzE2LTIuMzg4LDAuNzE2LTMuNjkzICBjMC0xLjMwNS0wLjI1OS0yLjU0OS0wLjcxNS0zLjY5M2wxNy4yODQtMTAuNDA5QzQwLjM0MiwxOC4xNDIsNDMuNDU0LDIwLDQ2Ljk5OCwyMGM1LjUxNCwwLDEwLTQuNDg2LDEwLTEwcy00LjQ4Ni0xMC0xMC0xMCAgcy0xMCw0LjQ4Ni0xMCwxMGMwLDEuMjU2LDAuMjQzLDIuNDU0LDAuNjY3LDMuNTYyTDIwLjM1OCwyMy45ODVjLTEuNzg4LTIuNzI0LTQuODY2LTQuNTI5LTguMzYxLTQuNTI5Yy01LjUxNCwwLTEwLDQuNDg2LTEwLDEwICBzNC40ODYsMTAsMTAsMTBjMy40OTUsMCw2LjU3Mi0xLjgwNSw4LjM2LTQuNTI5TDM3LjY2MSw0NS40M2MtMC40MywxLjEyNi0wLjY2NCwyLjMyOS0wLjY2NCwzLjU3YzAsMi42NzEsMS4wNCw1LjE4MywyLjkyOSw3LjA3MSAgYzEuOTQ5LDEuOTQ5LDQuNTEsMi45MjQsNy4wNzEsMi45MjRzNS4xMjItMC45NzUsNy4wNzEtMi45MjRjMS44ODktMS44ODksMi45MjktNC40LDIuOTI5LTcuMDcxcy0xLjA0LTUuMTgzLTIuOTI5LTcuMDcxICBDNTAuMTY5LDM4LjAyOSw0My44MjYsMzguMDI5LDM5LjkyNyw0MS45Mjl6IE00Ni45OTgsMmM0LjQxMSwwLDgsMy41ODksOCw4cy0zLjU4OSw4LTgsOHMtOC0zLjU4OS04LThTNDIuNTg2LDIsNDYuOTk4LDJ6ICAgTTExLjk5OCwzNy40NTZjLTQuNDExLDAtOC0zLjU4OS04LThzMy41ODktOCw4LThzOCwzLjU4OSw4LDhTMTYuNDA5LDM3LjQ1NiwxMS45OTgsMzcuNDU2eiBNNTIuNjU0LDU0LjY1NyAgYy0zLjExOSwzLjExOS04LjE5NCwzLjExOS0xMS4zMTMsMGMtMS41MTEtMS41MTEtMi4zNDMtMy41MjEtMi4zNDMtNS42NTdzMC44MzItNC4xNDYsMi4zNDMtNS42NTcgIGMxLjU2LTEuNTYsMy42MDgtMi4zMzksNS42NTctMi4zMzlzNC4wOTcsMC43NzksNS42NTcsMi4zMzljMS41MTEsMS41MTEsMi4zNDMsMy41MjEsMi4zNDMsNS42NTdTNTQuMTY2LDUzLjE0Niw1Mi42NTQsNTQuNjU3eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K',
	
	'STATES': 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iI0Q4MDAyNyIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=',
	
	//'AUTO_UNLOCK': 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8cGF0aCBkPSJNNDIsMTJIMThDOC4wNzUsMTIsMCwyMC4wNzUsMCwzMHM4LjA3NSwxOCwxOCwxOGgyNGM5LjkyNSwwLDE4LTguMDc1LDE4LTE4UzUxLjkyNSwxMiw0MiwxMnogTTE4LDQzICBjLTcuMTY4LDAtMTMtNS44MzItMTMtMTNzNS44MzItMTMsMTMtMTNzMTMsNS44MzIsMTMsMTNTMjUuMTY4LDQzLDE4LDQzeiBNNDkuNzA3LDI2LjcwN2wtOCw4QzQxLjUxMiwzNC45MDIsNDEuMjU2LDM1LDQxLDM1ICBzLTAuNTEyLTAuMDk4LTAuNzA3LTAuMjkzbC00LTRjLTAuMzkxLTAuMzkxLTAuMzkxLTEuMDIzLDAtMS40MTRzMS4wMjMtMC4zOTEsMS40MTQsMEw0MSwzMi41ODZsNy4yOTMtNy4yOTMgIGMwLjM5MS0wLjM5MSwxLjAyMy0wLjM5MSwxLjQxNCwwUzUwLjA5OCwyNi4zMTYsNDkuNzA3LDI2LjcwN3oiIGZpbGw9IiMwMDAwMDAiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
	
	'AUTO_UNLOCK': 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8cGF0aCBkPSJNNDIsMTJIMThDOC4wNzUsMTIsMCwyMC4wNzUsMCwzMHM4LjA3NSwxOCwxOCwxOGgyNGM5LjkyNSwwLDE4LTguMDc1LDE4LTE4UzUxLjkyNSwxMiw0MiwxMnogTTE4LDQzICBjLTcuMTY4LDAtMTMtNS44MzItMTMtMTNzNS44MzItMTMsMTMtMTNzMTMsNS44MzIsMTMsMTNTMjUuMTY4LDQzLDE4LDQzeiBNNDkuNzA3LDI2LjcwN2wtOCw4QzQxLjUxMiwzNC45MDIsNDEuMjU2LDM1LDQxLDM1ICBzLTAuNTEyLTAuMDk4LTAuNzA3LTAuMjkzbC00LTRjLTAuMzkxLTAuMzkxLTAuMzkxLTEuMDIzLDAtMS40MTRzMS4wMjMtMC4zOTEsMS40MTQsMEw0MSwzMi41ODZsNy4yOTMtNy4yOTMgIGMwLjM5MS0wLjM5MSwxLjAyMy0wLjM5MSwxLjQxNCwwUzUwLjA5OCwyNi4zMTYsNDkuNzA3LDI2LjcwN3oiIGZpbGw9IiM3NWNlNjYiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
};
