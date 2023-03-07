O objetivo deste projeto é criar um hook simples para abstrair o comportamento de inputs não controlados em formulários, além de ser uma forma de entender melhor a biblioteca react-hook-form, muito utilizada no desenvolvimento de aplicações web. Mais especificamente, este hook personalizado foi inspirado no "useForm" da biblioteca react-hook-form.

Assim como, este projeto pode ser utilizado para demonstrar a diferença entre inputs controlados e não controlados.

Com este hook personalizado é possível simplificar a validação de formulários e tornar o desenvolvimento mais eficiente e produtivo. Ao abstrair o comportamento de inputs não controlados, é possível lidar com diferentes tipos de formulários de forma mais simples e fácil, melhorando a experiência do usuário e a qualidade do código.

```
const {handleSubmit, register, errors} = useForm();
```

```
<form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('name', {
        rules: {
          required: 'O campo nome é obrigatório',
          onlyNumber: 'O campo nome deve ter apenas números'
        }
      })}/>
      {errors?.name && <p>{Object.values(errors.name)[0]}</p>}
      <button type="submit">Submit form</button>
</form>
```
