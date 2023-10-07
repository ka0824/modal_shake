# modal_shake
진동 애니메이션을 구현한 코드 입니다.

### 구현 코드

```
.modal {
  background: whitesmoke;
  position: absolute;
  width: 300px;
  height: 100px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  animation: vibration 0.1s 3;  // 적용 애니메이션, 적용 시간, 반복 횟수
}


// 2도 회전, 2도 역회전 애니메이션 반복하기
@keyframes vibration {
  from {
    transform: rotate(2deg);
  }

  to {
    transform: rotate(-2deg);
  }
}
```
