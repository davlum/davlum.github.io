---
title: Idris 2 on MacOS with Nix
tags: [nix, idris, macos]
readtime: false
---

[Nixos/nixpkgs#89548](https://github.com/NixOS/nixpkgs/pull/89548) was merged, 
and the joy of maybe a dozen Idris 2 users on MacOS who use Nix as a package manager
was felt across the land. 

Remember to update your channels.
```
nix-channel --update
nix-env -i idris2
```

