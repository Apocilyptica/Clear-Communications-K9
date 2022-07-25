#!/usr/bin/env bash

error_exit() {
  echo "$1" 1>&2
  exit 1
}

incremental_build() {
  if [[ -d "$XDG_CACHE_HOME"/public ]]; then
    echo "Copying cached public dir"
    rsync -a "$XDG_CACHE_HOME"/public/ public
  else
    echo "No cached public dir found"
  fi

  echo "Building..."

  yarn build
  if [ "$?" != "0" ]; then
    error_exit "Error encountered during build process"
  fi

  echo "Caching public dir for incremental builds"
  rsync -a public/ "$XDG_CACHE_HOME"/public
}

if [[ "$RENDER" ]]; then
  if [[ -z "$DISABLE_INCREMENTAL_BUILDS" ]]; then
    yarn build
    if [ "$?" != "0" ]; then
      error_exit "Error encountered during build process"
    fi
  else
    incremental_build
  fi

else
  yarn build
  if [ "$?" != "0" ]; then
    error_exit "Error encountered during build process"
  fi
fi