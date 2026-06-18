# TODO - Scalable NestJS Folder Architecture

## Plan (approved)

- Proceed with **no refactor of existing App code**.
- Only create the new scalable folder structure under `src/` to support modules, services, controllers, DTOs, guards, interceptors, and common utilities.

## Steps

1. Create folder scaffolding:
   - `src/modules/`
   - `src/common/` with subfolders: `guards/`, `interceptors/`, `dto/`, `utils/`
2. Add base template files (stubs) for:
   - `src/common/interceptors/`
   - `src/common/guards/`
   - `src/common/dto/`
   - `src/common/utils/`
3. Add a sample feature module skeleton under `src/modules/` (non-wired, no runtime impact).
4. Ensure existing code remains unchanged.
5. Do not run tests/build/lint.
6. Remove/avoid any changes that require runtime wiring unless explicitly requested.
